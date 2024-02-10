// invite.js

export async function getServerSideProps(context) {
  // Redirect to your Discord bot invite URL
  context.res.writeHead(302, { Location: 'https://discord.com/api/oauth2/authorize?client_id=1204476384165236796&permissions=8&scope=bot+applications.commands' });
  context.res.end();

  // Return an empty object as props
  return { props: {} };
}

const InvitePage = () => {
  // This component will not be rendered, as the redirection happens on the server side
  return null;
};

export default InvitePage;
