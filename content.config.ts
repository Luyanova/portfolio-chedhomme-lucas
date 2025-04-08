import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    multimedia: defineCollection({
      type: 'page',
      source: 'multimedia/**/*.md',
      schema: z.object({
        title: z.string(),
        isTopProject: z.boolean(),
        summary: z.string(),
        cover1: z.string(),
        cover2: z.string(),
        tools: z.array(z.string()),
        tags: z.array(z.string()),
        projectUrl: z.string(),
        date: z.string(),
        team: z.array(z.object({
          name: z.string(),
          site: z.string().optional()
        })).optional(),
        introduction: z.string(),
        description: z.string(),
        objective: z.string(),
        galleryImages: z.array(
          z.union([
            z.string(),
            z.object({
              path: z.string(),
              legend: z.string().optional()
            })
          ])
        )
      })
    }),
    web: defineCollection({
      type: 'page',
      source: 'web/**/*.md',
      schema: z.object({
        title: z.string(),
        isTopProject: z.boolean(),
        summary: z.string(),
        cover1: z.string(),
        cover2: z.string(),
        tools: z.array(z.string()),
        tags: z.array(z.string()),
        projectUrl: z.string(),
        date: z.string(),
        team: z.array(z.object({
          name: z.string(),
          site: z.string().optional()
        })),
        introduction: z.string(),
        description: z.string(),
        objective: z.string(),
        galleryImages: z.array(
          z.union([
            z.string(),
            z.object({
              path: z.string(),
              legend: z.string().optional()
            })
          ])
        )
      })
    })
  }
})
