import Hero from "../components/Hero";
import SuggestionPanel from "../components/SuggestionPanel";

function Browse() {
  return (
    <>
      <Hero />
      <SuggestionPanel title="Today's Top Picks For You" type="shows" />
      <SuggestionPanel title="Popular Movies In Turkey" type="movies" />
      <SuggestionPanel title="Continue Watching" type="shows" />
    </>
  );
}

export default Browse;
