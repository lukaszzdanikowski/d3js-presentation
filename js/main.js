Reveal.addEventListener('ready', function(event) {
    var execute = function() {
        eval(this.parentElement.querySelector('code').innerText);
    };
    
    var clear = function() {
        this.parentElement.parentElement.querySelector('.result').innerHTML = '';
    };
    
    var nodeList = document.querySelectorAll("pre code.javascript, pre code.js")
    Array.prototype.slice.call(nodeList, 0).forEach(function(el) {
       var execBtn = document.createElement('button');
       execBtn.innerText = "Execute";
       execBtn.onclick = execute;
       execBtn.classList.add('exec-button');
       
       var clearBtn = document.createElement('button');
       clearBtn.innerText = 'Clear';
       clearBtn.onclick = clear;
       clearBtn.classList.add('clear-button');
       
       el.parentElement.appendChild(execBtn);
       el.parentElement.appendChild(clearBtn);
    });
});

Reveal.addEventListener('visualizeParagraphs', function(ev) {
   var dataset = JSON.parse(document.getElementById('datasetSimple').innerText);
   window.dataset = dataset;
});

Reveal.addEventListener('visualizeParagraphs2', function(ev) {
   var dataset = JSON.parse(document.getElementById('datasetSimple').innerText);
   window.dataset = dataset;
   window.colorScale = d3.scale.category20c();
});

Reveal.addEventListener('visualizeParagraphs3', function(ev) {
   var dataset = JSON.parse(document.getElementById('datasetSimple').innerText);
   window.dataset = dataset;
   window.colorScale = d3.scale.category20c();
});

Reveal.addEventListener('visualizeTable', function(ev) {
   var dataset = JSON.parse(document.getElementById('datasetSimple').innerText);
   window.dataset = dataset;
   window.colorScale = d3.scale.category20c();
});

Reveal.addEventListener('visualizeSVG', function(ev) {
   var dataset = JSON.parse(document.getElementById('datasetSimple').innerText);
   window.dataset = dataset;
   window.colorScale = d3.scale.category20c();
   window.barHeight = 100;
   window.barHeight = 100;
   window.barWidth = 600;
   window.barMargin = 2;
});

Reveal.addEventListener('visualizeSVG2', function(ev) {
   var httpRequest = new XMLHttpRequest();
   httpRequest.onload = function(ev) {
       window.dataset = JSON.parse(this.responseText);
   };
   httpRequest.open('GET', './data/top50.json');
   httpRequest.send();
   window.colorScale = d3.scale.category20c();
   window.barHeight = 100;
   window.barWidth = 600;
   window.barMargin = 2;
});

Reveal.addEventListener('visualizeSVG3', function(ev) {
   var httpRequest = new XMLHttpRequest();
   httpRequest.onload = function(ev) {
       window.dataset = JSON.parse(this.responseText);
   };
   httpRequest.open('GET', './data/top50.json');
   httpRequest.send();
   window.colorScale = d3.scale.category20c();
   window.scatterHeight = 100;
   window.scatterWidth = 600;
   window.scatterMargin = 2;
});