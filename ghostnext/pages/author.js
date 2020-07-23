

const AuthorPage = (props) => {
    return (
      <div>
        <h1>{props.author.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.author.bio }} />
      </div>
    )
  }
  
  AuthorPage.getInitialProps = async (params) => {
    const author = await getAuthor(params.query.slug);
    return { author: author }
  };
  
  export default AuthorPage;
  