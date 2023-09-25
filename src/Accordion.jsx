

const Accordion = ({title ,acor,setAcor}) => {
  
  return (
    <div className="accordion" >  
     <div className="accordionHeading" >
      <div className="container">
        <p>{title}</p>
       <span onClick={()=>setAcor(title)}>Click Me</span>
    </div>
      </div>
      <div className={(acor===title ? "show" : "") + "accordionContent"}>
      <div className="container">
       <p>Lorem ipsum dolor sit amet.</p>
    </div>
    </div>
    </div>
  )
}

export default Accordion;












