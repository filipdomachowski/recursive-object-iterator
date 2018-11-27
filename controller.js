fetch('http://localhost:8000/data')
    .then(data => data.json())
    .then(data => {
        console.log(data)

        const container = document.getElementById('container');
        const list = document.createElement('ul');
        container.appendChild(list);
        
        const appendLi = function(parentUl, data, key){
            let element = document.createElement('li');
            key !== undefined && key !== null ? element.innerHTML = key + ": " + data : element.innerHTML = data
            parentUl.appendChild(element)
        }

        const recursion = (data, labels, parentUl) => {
            Object.keys(data).forEach((key) => {                
                if(Array.isArray(data[key])){
                    let ulTab = document.createElement('ul');
                    key !== undefined ? ulTab.innerHTML = key + ": " : ulTab.innerHTML = "";                    
                    parentUl.appendChild(ulTab);                    
                    recursion(data[key], false, ulTab)
                }else if(typeof data[key] === 'object'){
                    let ulObj = document.createElement('ul');
                    ulObj.innerHTML = key + ": "; 
                    parentUl.appendChild(ulObj)
                    recursion(data[key], true, ulObj);
                }else{                                          
                    labels === true ? appendLi(parentUl, data[key], key) : appendLi(parentUl, data[key])                   
                }
            })
        }
                    
        recursion(data, true, list)

    })