fetch('http://localhost:8000/data')
    .then(data => data.json())
    .then(data => {

        const container = document.getElementById('container');
        const list = document.createElement('ul');
        container.appendChild(list);
        
        const appendUl = function(key, parentUl){
            let element = document.createElement('ul');
            key !== undefined && isNaN(key) ? element.innerHTML = key + ": " : element.innerHTML = "";                    
            parentUl.appendChild(element);
            return element;        
        }

        const appendLi = function(parentUl, data, key){
            let element = document.createElement('li');
            key !== undefined && key !== null ? element.innerHTML = key + ": " + data : element.innerHTML = data;
            parentUl.appendChild(element);
        }

        const recursion = (data, labels, parentUl) => {
            Object.keys(data).forEach((key) => {                
                if(Array.isArray(data[key])){
                    ulTab = appendUl(key, parentUl);
                    recursion(data[key], false, ulTab);
                }else if(typeof data[key] === 'object'){
                    ulObj = appendUl(key, parentUl);
                    recursion(data[key], true, ulObj);
                }else{                                          
                    labels === true ? appendLi(parentUl, data[key], key) : appendLi(parentUl, data[key]);                   
                }
            })
        }
                    
        recursion(data, true, list);

    })