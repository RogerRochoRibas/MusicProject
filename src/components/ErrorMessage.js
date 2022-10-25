export function ErrorMessage(props) {
  return (
    <div className="errorMessage">
      <p>The Musicovery API is not working right now.</p>
      <p>To see how to fix the issue go to:</p>
      <p>
        <a href="https://github.com/RogerRochoRibas/MusicProject#usage">
          https://github.com/RogerRochoRibas/MusicProject#usage
        </a>
      </p>
      <p>In the meantime we got a premade list of tracks for you:</p>
    </div>
  );
}
