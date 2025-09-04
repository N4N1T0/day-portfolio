import type { CollectionEntry } from "astro:content";
import { slugify } from "./common-utils";

/**
 * Sorts two collection entries by their publish dates in descending order
 * @param itemA - First collection entry (blog or projects)
 * @param itemB - Second collection entry (blog or projects)
 * @returns Difference between dates in milliseconds, for sorting
 */
export function sortItemsByDateDesc(
  itemA: CollectionEntry<"blog" | "projects">,
  itemB: CollectionEntry<"blog" | "projects">,
) {
  return (
    new Date(itemB.data.publishDate).getTime() -
    new Date(itemA.data.publishDate).getTime()
  );
}

/**
 * Extracts and processes all unique tags from blog posts
 * @param posts - Array of blog collection entries
 * @returns Array of objects containing tag names and their slugified versions
 */
export function getAllTags(posts: CollectionEntry<"blog">[]) {
  const tags: string[] = [
    ...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean)),
  ];
  return tags
    .map((tag) => {
      return {
        name: tag,
        slug: slugify(tag),
      };
    })
    .filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
    });
}

/**
 * Filters posts by a specific tag slug
 * @param posts - Array of blog collection entries
 * @param tagSlug - Slugified tag to filter by
 * @returns Array of blog posts that contain the specified tag
 */
export function getPostsByTag(
  posts: CollectionEntry<"blog">[],
  tagSlug: string,
) {
  const filteredPosts: CollectionEntry<"blog">[] = posts.filter((post) =>
    (post.data.tags || []).map((tag) => slugify(tag)).includes(tagSlug),
  );
  return filteredPosts;
}
