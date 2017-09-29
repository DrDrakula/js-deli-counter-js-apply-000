var katzDeli = ["Ada","Gray","Natsu","Erza"]

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var serving = "Currently serving "+katzDeliLine[0]+"."
    katzDeliLine.shift()
    console.log("Now Serving " + serving)
    return serving
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var array = ["The line is currently:"]
    for(let i = 0; i < katzDeliLine.length; i++){
      array+=(" "+(i + 1) + ". " + katzDeliLine[i])
      if ((i + 1) === katzDeliLine.length){
        array += ""
      }else{
        array += ","
      }
    }
    console.log(array)
    return array
  }else{
    return "The line is currently empty."
  }
}

currentLine(katzDeli)
nowServing(katzDeli)
