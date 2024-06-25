import { StoryCard } from "features/story-card";

interface Story {
  title: string;
  image: string;
}

interface StoriesProps {
  stories: Story[];
}

export const Stories = (props: StoriesProps) => {
  return (
    <>
      {props.stories.map((story, index) => (
        <StoryCard key={index} title={story.title} image={story.image} />
      ))}
    </>
  );
};
