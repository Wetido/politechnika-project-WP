import GhostContentAPI from "@tryghost/content-api";


const api = new GhostContentAPI({

    url: "http://localhost:2368",
    key: "6abb94a5bc5976fc0c9f115315",
    version: "v3",
});
//	6abb94a5bc5976fc0c9f115315
// bbc520fcb17933717d637a1584 - FILIP
//http://localhost:2368

export async function getPosts() {
    return await api.posts
      .browse({
        limit: "all",
        filter : 'tags:getting-started'
      })
      .catch(err => {
        console.error(err);
      });
  }

export async function getIndexPagePosts() {
    return await api.posts
      .browse({
        limit : 3,
        filter : 'tags:getting-started'
      })
      .catch(err => {
        console.error(err);
      });
  }

export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug,

      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getPostsByTag(postTag) {
    return await api.posts
      .browse({
        filter : 'tags:galeria' //zrobione na szywno do poprawy filtrownaie po zmiennej
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getSinglePostByTag(postSlug) { //TO DO
    // return await api.posts
    //   .read({
    //     slug: postSlug
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }



  export async function getAuthor(authorSlug) {
    return await api.authors
      .read({
        slug: authorSlug
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getPages(pageSlug) {
    return await api.pages
      .read({
        slug: pageSlug
      })
      .catch(err => {
        console.error(err);
      });
  }