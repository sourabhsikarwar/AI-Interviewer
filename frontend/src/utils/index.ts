export const getFeedbackPrompt = (
  value: string,
  topic: string,
  level: string
) => {
  const promptToGenerate = `I am sharing you 10 questions on the topic ${topic} with level ${level}. A student is practicing with a mock interview where he answered the questions with his/her knowledge or if he/she didn't knew, we added the answer as 'not answered'. Please give me feedback on the answers with respect to technology skills and knowledge as well as vocabulary and grammer if needed to help the person gain knowledge and interview experience. At last, add marks out of 10 according to answers. \n\n`;
  const prompt = `${promptToGenerate}${value}`;
  return prompt;
};

export const getResourcePrompt = (topic: any, level: any) => {
  const promptToGenerate = `Please provide resources for the topic ${topic.title} with level ${level} with links to websites and youtube channels. Please give me the answer in markdown with links in different colors!`;
  return promptToGenerate;
};
