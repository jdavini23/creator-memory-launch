import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users synced from Clerk
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_clerk_id", ["clerkId"])
    .index("by_email", ["email"]),

  // Connected OAuth sources (Notion, GitHub, etc.)
  sources: defineTable({
    userId: v.id("users"),
    type: v.union(v.literal("notion"), v.literal("github")),
    accessToken: v.string(), // encrypted at rest
    refreshToken: v.string(), // encrypted at rest
    cursor: v.optional(v.string()), // for incremental sync
    status: v.union(
      v.literal("connected"),
      v.literal("syncing"),
      v.literal("error"),
      v.literal("disconnected")
    ),
    lastSyncedAt: v.optional(v.number()),
    config: v.object({
      workspaceId: v.optional(v.string()), // Notion workspace
      repoNames: v.optional(v.array(v.string())), // GitHub repos
    }),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_and_type", ["userId", "type"]),

  // Chunked documents from sources
  documents: defineTable({
    sourceId: v.id("sources"),
    externalId: v.string(), // Notion page ID / GitHub file path
    title: v.string(),
    content: v.string(), // chunked text
    contentHash: v.string(), // for dedup
    metadata: v.object({
      type: v.union(v.literal("code"), v.literal("markdown"), v.literal("prose"), v.literal("tweet")),
      language: v.optional(v.string()),
      path: v.optional(v.string()),
      url: v.optional(v.string()),
      createdAt: v.number(),
      updatedAt: v.number(),
    }),
    embedding: v.array(v.float64()), // 1536-dim for text-embedding-3-small
    chunkIndex: v.number(),
    totalChunks: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_source", ["sourceId"])
    .index("by_content_hash", ["contentHash"])
    .searchIndex("search_content", { searchField: "content" }),

  // AI generations with provenance
  generations: defineTable({
    userId: v.id("users"),
    prompt: v.string(),
    output: v.string(),
    model: v.string(),
    citedDocumentIds: v.array(v.id("documents")),
    sessionId: v.string(),
    feedback: v.optional(v.union(v.literal("helpful"), v.literal("not-helpful"))),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_session", ["sessionId"]),

  // Proactive memory cards
  memoryCards: defineTable({
    userId: v.id("users"),
    triggerDocumentId: v.id("documents"),
    suggestedDocumentIds: v.array(v.id("documents")),
    reason: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("seen"),
      v.literal("dismissed"),
      v.literal("used")
    ),
    createdAt: v.number(),
    seenAt: v.optional(v.number()),
  })
    .index("by_user_and_status", ["userId", "status"])
    .index("by_trigger_doc", ["triggerDocumentId"]),

  // Waitlist / early access emails
  waitlist: defineTable({
    email: v.string(),
    source: v.optional(v.string()), // "hero", "footer", "features", etc.
    metadata: v.optional(v.object({
      userAgent: v.optional(v.string()),
      referrer: v.optional(v.string()),
    })),
    status: v.union(v.literal("pending"), v.literal("confirmed"), v.literal("invited")),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_status", ["status"]),

  // Sync logs for debugging
  syncLogs: defineTable({
    sourceId: v.id("sources"),
    status: v.union(v.literal("started"), v.literal("completed"), v.literal("failed")),
    documentsNew: v.number(),
    documentsUpdated: v.number(),
    documentsDeleted: v.number(),
    error: v.optional(v.string()),
    startedAt: v.number(),
    completedAt: v.optional(v.number()),
  })
    .index("by_source", ["sourceId"])
    .index("by_status", ["status"]),
});