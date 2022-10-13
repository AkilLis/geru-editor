import React from 'react'
import Panels from "./components/Panels"
import Canvas from "./components/Canvas"
import Footer from "./components/Footer"
import Toolbox from "./components/Toolbox"
import Preview from './components/Preview'
import EditorContainer from "./components/EditorContainer"

function GraphicEditor(props) {
  const {
    params = {}
  } = props

  const { onSuccessCallback = () => {} } = params

  return (
    <>
      <EditorContainer>
        <Preview onSuccessCallback={onSuccessCallback} />
        <div style={{ display: "flex", flex: 1 }}>
          <Panels />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
            <Toolbox />
            <Canvas />
            <Footer />
          </div>
        </div>
      </EditorContainer>
    </>
  )
}

export default GraphicEditor
