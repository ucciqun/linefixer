document.getElementById("convert_button").addEventListener("click",(e)=>{
    e.preventDefault()
    
    // 入力されたテキストを取得する
    const raw_text=document.getElementById("raw-text").value

    const ans=[]
    let temp=""
    Array.from(raw_text.split("\n")).map((text)=>{
        if(text[text.length-1]==="."|text[text.length-1]==="。"){
            ans.push(temp+" "+text)
            temp=""
            return
        }
        temp+=text+" "
    })
    if(temp!=""){
        ans.push(temp)
    }

    document.getElementById("converted-text").value=ans
})

document.getElementById("copy_button").addEventListener("click",(e)=>{
    e.preventDefault()
    text=document.getElementById("converted-text").value
    navigator.clipboard.writeText(text);
})
document.getElementById("reset_button").addEventListener("click",(e)=>{
    e.preventDefault()
    document.getElementById("raw-text").value=""
})