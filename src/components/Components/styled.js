import styled from 'styled-components';

export const Container = styled.div` 
    .todo-container {
        background: #222d2e;
        width: 50vw;
        margin: 10em auto;
        border-radius: 15px;
        padding: 20px 10px;
        color: white;
        border: 3px solid black;
  }
  
    .task {
        border: 1px solid white;
        border-radius: 5px;
        padding: 0.5em;
        margin: 0.5em;
  }
  
    .task button{
        background: #32795b;
        border-radius: 5px;
        margin: 0px 5px;
        padding: 3px 5px;
        border: none;
        cursor: pointer;
        color: white;
        float: right;
  }
  
    .header {
        margin: 0.5em;
        font-size: 2em;
        text-align: center;
  }
  
    .create-task input[type=text] {
        margin: 2.5em 4em;
        text-align: center;
        width: 80%;
        outline: none;
        border: none;
        padding: 0.7em;
  }
`;