

function related(){
    let value = document.getElementById('value').value;
    let url = `https://api.datamuse.com/words?rel_trg=${value}`;
    let str = []
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length != 0){
                for (i in data){
                   str.push((data[i]['word']));
                }
            }
            else{
                str.push('404 Word Not Found! :(')
            }
            
        });
        
        setTimeout(() => {
            
            vals = str.slice(0,70).toString();
            
            document.getElementById('result').innerHTML = vals;
            
        },10);
    } 
    
    function rhymes(){
        let value = document.getElementById('value').value;
        let url = `https://api.datamuse.com/words?rel_rhy=${value}`;
        let str = []
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length != 0){
                for (i in data){
                    str.push((data[i]['word']));
                }
            }
            
            else{
                str.push('404 Word Not Found! :(')
            }
        });
        
        setTimeout(() => {
            
            vals = str.slice(0,70).toString()
            
            document.getElementById('result').innerHTML = vals;
            
        },10);
    } 
    
    
    
    
    
    function starend(){
        let value = document.getElementById('value').value;
        let url = `https://api.datamuse.com/words?sp=${value}`;
        let str = []
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length != 0){
                for (i in data){
                    str.push((data[i]['word'])+'');
                }
            }
            
            else{
                str.push('404 Word Not Found! :(')
            }
        });
        
        
    setTimeout(() => {
        
        vals = str.slice(0,70).toString()
    
        document.getElementById('result').innerHTML = vals;
    
    },10);
} 
