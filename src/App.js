import React from 'react'
import Header from '../src/components/Header'
import Meme from '../src/components/Meme'
import Testing from '../src/components/Testing'
import Testing2 from '../src/components/Testing2'
import Testing3 from '../src/components/Testing3'
import Testing4 from '../src/components/Testing4'
import Jan from '../src/components/Jan'
import Jokes from '../src/components/Jokes'
import Challenge from '../src/components/SmallChallenge'
import Form from '../src/components/Form'
import NewForm from '../src/components/NewForm'
import FormChallenge from '../src/components/FormChallenge'
import ApiForMeme from '../src/components/ApiForMeme'
import UseState1 from '../src/components/UseState1'
export default function App(){
  return(
    <div>
      <Header />
      <Meme />
      <Testing />
      <Testing2 />
      <Testing3 />
      <Testing4 />
      <Jan />
      <Jokes />
      <Challenge />
      <NewForm />
      <FormChallenge />
      <UseState1 />
    </div>
  )
}