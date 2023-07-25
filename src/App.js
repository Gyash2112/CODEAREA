import React, { useState } from 'react'
import { useRef } from 'react';
import Editor from '@monaco-editor/react';
const Footer = () => {

  let data = {
    languages: ["java", "cpp", "python"],

    langDetails: [
      {
        id: "1",
        defaultLanguage: "java",
        content: 
`import java.util.Scanner;
import java.util.*;

class Main{
  public static void main(String args[]){
    //Write your code here
  }
}`
      },
      {
        id: "2",
        defaultLanguage: "cpp",
        content:
`#include<stdio.h>
#include<bits/std++.h>
#include<conio.h>

int main(void){
  //Write your code here
}
`
      },{
        id: "3",
        defaultLanguage: "python",
        content: 
`def fun():
    #Write your code here

print(fun())
`
      },
    ]


  }

  const editorRef = useRef(null);


  const [lang, setLang] = useState("java")

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }
  const handleSelection = (event) => {
    setLang(event.target.value);

  }
  // console.log(lang, "sla")


  return (
    <>
    {console.log(data.langDetails.find(element => element.defaultLanguage === lang).content,"chekcsai")}

    
      

      <select onChange={handleSelection} >
        {data.languages.map((element) =>
          <option value={`${element}`}> {element}</option>
        )}


      </select>
      <button onClick={showValue}>Click</button>
      <Editor
        height="90vh"
        path={`${data.langDetails.find(element => element.defaultLanguage === lang).id}`}
        defaultLanguage={`${data.langDetails.find(element => element.defaultLanguage === lang).defaultLanguage}`}
        defaultValue={`${data.langDetails.find(element => element.defaultLanguage === lang).content}`}
        onMount={handleEditorDidMount}
        theme='vs-dark'
      />

          {console.log("hey")}



    </>
  )
}

export default Footer
