import { Avatar, Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";


function extractCodeFromString(message: string) {
    if (message.includes("```")) {
      const blocks = message.split("```");
      return blocks;
    }
  }

  function isCodeBlock(str: string) {
    if (
      str.includes("=") ||
      str.includes(";") ||
      str.includes("[") ||
      str.includes("]") ||
      str.includes("{") ||
      str.includes("}") ||
      str.includes("#") ||
      str.includes("//")
    ) {
      return true;
    }
    return false;
  }


const ChatItem = ({ content, role }:
    {
        content: string;
        role: "user" | "assistant";
    }) => {
        const messageBlocks = extractCodeFromString(content);
    const auth = useAuth();
    let userName = '';

    if (auth?.user?.name) {
        const nameParts = auth.user.name.split(' ');
        const firstNameInitial = nameParts[0]?.[0] || '';
        const lastNameInitial = nameParts[1]?.[0] || '';
        userName = `${firstNameInitial}${lastNameInitial}`;
    }
    return role === "assistant" ? (<Box
        className="flex p-2 my-2 gap-2"
        sx={{ bgcolor: "#004d5612" }}>
        <Avatar className="ml-0" >
            <img src="vartalaap.png" alt="vartalaap" width={"80px"} />
        </Avatar>
        <Box>
        {!messageBlocks && (
          <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
        )}
        {messageBlocks &&
          messageBlocks.length &&
          messageBlocks.map((block) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter style={coldarkDark} language="java">
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography sx={{ fontSize: "20px" }}>{block}</Typography>
            )
          )}
      </Box>
    </Box>) : (
        <Box
            className="flex p-2 gap-2"
            sx={{ bgcolor: "#004d56" }}>
            <Avatar className="ml-0 bg-black text-white" >
                {userName}
            </Avatar>
            <Box>
                <Typography className="text-white text-xl" > {content} </Typography>
            </Box>
        </Box>);
}

export default ChatItem;