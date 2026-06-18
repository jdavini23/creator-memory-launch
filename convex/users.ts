import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Waitlist mutations
export const joinWaitlist = mutation({
  args: {
    email: v.string(),
    source: v.optional(v.string()),
    metadata: v.optional(v.object({
      userAgent: v.optional(v.string()),
      referrer: v.optional(v.string()),
    })),
  },
  handler: async (ctx, args) => {
    const email = args.email.toLowerCase().trim();
    
    // Check if already exists
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", email))
      .unique();
    
    if (existing) {
      if (existing.status === "pending") {
        return { success: true, alreadyJoined: true, id: existing._id };
      }
      // Update status if was invited/confirmed
      await ctx.db.patch(existing._id, { status: "pending" });
      return { success: true, alreadyJoined: true, id: existing._id };
    }
    
    const id = await ctx.db.insert("waitlist", {
      email,
      source: args.source || "unknown",
      metadata: args.metadata || {},
      status: "pending",
      createdAt: Date.now(),
    });
    
    return { success: true, alreadyJoined: false, id };
  },
});

export const getWaitlistCount = query({
  args: {},
  handler: async (ctx) => {
    const count = await ctx.db
      .query("waitlist")
      .withIndex("by_status", (q) => q.eq("status", "pending"))
      .collect();
    return count.length;
  },
});

// User management (synced from Clerk webhook)
export const upsertUser = mutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .unique();
    
    if (existing) {
      await ctx.db.patch(existing._id, {
        email: args.email,
        name: args.name,
        imageUrl: args.imageUrl,
        updatedAt: Date.now(),
      });
      return { userId: existing._id, created: false };
    }
    
    const userId = await ctx.db.insert("users", {
      clerkId: args.clerkId,
      email: args.email,
      name: args.name,
      imageUrl: args.imageUrl,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return { userId, created: true };
  },
});

export const getUserByClerkId = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .unique();
  },
});

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    // This will be called from a Clerk-authenticated context
    // The user identity is available via ctx.auth.getUserIdentity()
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;
    
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();
    return user;
  },
});

// Source management
export const createSource = mutation({
  args: {
    userId: v.id("users"),
    type: v.union(v.literal("notion"), v.literal("github")),
    accessToken: v.string(),
    refreshToken: v.string(),
    config: v.object({
      workspaceId: v.optional(v.string()),
      repoNames: v.optional(v.array(v.string())),
    }),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("sources")
      .withIndex("by_user_and_type", (q) => 
        q.eq("userId", args.userId).eq("type", args.type)
      )
      .unique();
    
    if (existing) {
      await ctx.db.patch(existing._id, {
        accessToken: args.accessToken,
        refreshToken: args.refreshToken,
        config: args.config,
        status: "connected",
        updatedAt: Date.now(),
      });
      return { sourceId: existing._id, created: false };
    }
    
    const sourceId = await ctx.db.insert("sources", {
      userId: args.userId,
      type: args.type,
      accessToken: args.accessToken,
      refreshToken: args.refreshToken,
      config: args.config,
      status: "connected",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return { sourceId, created: true };
  },
});

export const getUserSources = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("sources")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
  },
});