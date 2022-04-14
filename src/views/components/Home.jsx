import { React, useState, useEffect } from "react";
import { Stack } from "@mui/material";
import ListItem from "./ListItem";
import api from "../../api";

function QuestionsList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const data = await api.get({ path: "/question" });
        console.log(data);
        setQuestions(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchQuestions();
  }, []);

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" mt={10}>
      {questions.map((item) => (
        <ListItem
          key={item._id}
          title={item.title}
          time={new Date(item.createdAt).toDateString()}
        />
      ))}
    </Stack>
  );
}

export default QuestionsList;
