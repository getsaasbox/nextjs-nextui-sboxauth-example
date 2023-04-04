
import withSboxAuth from 'sbox-auth-next';

function Home() {
  return(<div>Hello World</div>);
}

export const getServerSideProps = withSboxAuth(
  async (req, res) => {
    let user = req.user;
    if (req.user) {
      console.log("We have a user:", req.user)
    }
    return {
      props: { user }
    }
  }
)

export default Home;
