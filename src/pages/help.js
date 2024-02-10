// discord.js

export async function getServerSideProps(context) {
  // Redirect to your Discord server URL
  context.res.writeHead(302, { Location: 'https://discord.gg/VBZYgw7b' });
  context.res.end();

  // Return an empty object as props
  return { props: {} };
}

const DiscordPage = () => {
  // This component will not be rendered, as the redirection happens on the server side
  return null;
};

export default DiscordPage;
