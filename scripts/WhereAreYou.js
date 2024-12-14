import { setSocioLocationId } from "./TransientState.js"



const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertInt = parseInt(changeEvent.target.value)
        setSocioLocationId(convertInt)
    }
}




export  const  locationTypeChoices = async () => {

document.addEventListener("click", handleLocationChange)

    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()
    
    let choicesHTML = "<h2> WHICH TYPE OF LOCATION DO U LIV?</h2>"
    for (const location of locations) {
        choicesHTML += `<input type='radio' name='location' value='${location.id}'/>
         ${location.label}`
    }
    
    return choicesHTML
}