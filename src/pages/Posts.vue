<template>
  <Layout>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in $page.allPost.contents" :key="post.content.id">
        <g-link :to="post.content.path">{{ post.content.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Posts'
  }
}
</script>

<page-query>
query Index {
  allPost: allContentfulBlogPosts(sortBy: "createdAt", order: DESC) {
    totalCount,
    contents: edges {
      content: node {
        id,
        path,
        title,
        article,
        createdAt
      }
    }
  }
}
</page-query>
