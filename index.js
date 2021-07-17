

function tictactoe(){
    let current='o';
    let count = 0;
    let start=false;
    let value=[[{status:false,value:0},{status:false,value:0},{status:false,value:0}],
    [{status:false,value:0},{status:false,value:0},{status:false,value:0}],
    [{status:false,value:0},{status:false,value:0},{status:false,value:0}]];
    document.querySelector('.title').addEventListener('click',(event)=>{
        if(!start){
            this.reset();
        }
    });
    this.alternate=()=>{
        current=(current=='X'?'O':'X');
        return current;
    }
    this.start=()=>{
        if(!start){
            start=true;
            document.querySelector('.title').innerHTML='Think twice before you click..';
        }
    }
    this.clicked=(row,column)=>{
        if(start){
        if( !value[row][column].status){
            count++;
        value[row][column].value=this.alternate();
        value[row][column].status=true;
        let color = (value[row][column].value == 'X')? 'green' : 'red' ;
        document.querySelector(`.p${row}${column}`).innerHTML=value[row][column].value;
        document.querySelector(`.p${row}${column}`).style.backgroundColor= color;
        document.querySelector(`.p${row}${column}`).style.color=`white`;
        this.check(row,column);
        }}
    }
    this.check=(row,column)=>{
        if(value[row][0].value==value[row][1].value && value[row][1].value==value[row][2].value){
            document.querySelector('.title').innerHTML=`${value[row][1].value} won`;
            start=false;
        }
        else if(value[0][column].value==value[1][column].value && value[0][column].value==value[2][column].value){
            document.querySelector('.title').innerHTML=`${value[0][column].value} won`;
            start=false;
        }
        else if(value[0][0].value==value[1][1].value && value[1][1].value==value[2][2].value && value[2][2].status==true){
            document.querySelector('.title').innerHTML=`${value[1][1].value} won`;
            start=false;
        }
        else if(value[2][0].value==value[1][1].value && value[1][1].value==value[0][2].value && value[2][0].status==true){
            document.querySelector('.title').innerHTML=`${value[1][1].value} won`;
            start=false;
        }
        else if(count==9){
            document.querySelector('.title').innerHTML=`Draw`;
            start=false;            
        }
        
    }
    this.reset=()=>{
        value=[[{status:false,value:0},{status:false,value:0},{status:false,value:0}],
    [{status:false,value:0},{status:false,value:0},{status:false,value:0}],
    [{status:false,value:0},{status:false,value:0},{status:false,value:0}]];
        start=false;
        current='o';
        count = 0;
        for(let i=0; i<3 ;i++){
            for(let j=0; j<3 ;j++){
                document.querySelector(`.p${i}${j}`).innerHTML=' ';
                document.querySelector(`.p${i}${j}`).style.backgroundColor=`#ffc94750`;
                document.querySelector(`.p${i}${j}`).style.color='black';
            }
        }
        this.start();
    }
}

const game = new tictactoe()
game.start();