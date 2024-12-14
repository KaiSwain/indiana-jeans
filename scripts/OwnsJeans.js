import { setOwnsBlueJeans } from "./TransientState.js"



const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}




export const ownJeansChoices = () => {

    document.addEventListener("change", handleOwnershipChange)

    let jeansOrNoHTML = "<h2>DO U OWN JEANS?</h2>"
     jeansOrNoHTML += "<input type='radio' name='ownsJeans' value='true' /> Yes" 
    jeansOrNoHTML += "<input type='radio' name='ownsJeans' value='false' /> NO "
    return jeansOrNoHTML
}