import { Configuration } from "openai";
export const configureOpenAI = () => {
    const config = new Configuration({
        apiKey: process.env.OPEN_AI,
        organization: process.env.OPEN_AI_ORGANIZATION,
    });
    return config;
};
//# sourceMappingURL=openai-config.js.map