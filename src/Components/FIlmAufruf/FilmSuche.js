
import { Component} from 'react';

import FilmSucheAPI from '../../API_Pulls/FilmSucheAPI';
import './FilmAufruf.css'


class FilmSuche extends Component{

  
  constructor(props) {
    super(props);
    this.state = {
      value: ' ', 
      
      filme:[],
      visible: false,
      FehlerAusgabe: false,
      Ergebnis0: false,
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    /* this.APIaufruf= this.APIaufruf.bind(this) */
    
  }

  
    
    
    handleChange(event) {
      const target = event.target;
      const value = target.value /*  === 'text' ? target.checked : target.value;  */
      const name = target.name;

      this.setState({
        [name]: value});
       
    }
  

    handleSubmit(event) {
/*       alert('Folgender Text wurde hinzugefügt: ' + this.state.value /* + ' || and also a fruit: ' + this.state.obst );
       console.log(this.state.value) */
       event.preventDefault();
       

       
       FilmSucheAPI.getFilmSucheAPI(this.state.value).then((response) => {
        
        let movies = response.data.results;

        this.setState({filme: movies}); 
       
        console.log(this.state.filme);
       
         /*  await  */
         if(this.state.filme === null){
          this.setState({visible: false})
           this.setState({FehlerAusgabe: true})
           this.setState({Ergebnis0: false})
         }else if(this.state.filme.length === 0){
           this.setState({Ergebnis0: true})
           this.setState({visible: false})
           this.setState({FehlerAusgabe: false})
           
         }else if(this.state.filme.length > 0 ){
           this.setState({visible: true})
           this.setState({Ergebnis0: false})
           this.setState({FehlerAusgabe: false})
         }

       }
       )}

       clickHandler(Info){
        alert("Das ist die ID: "+Info)
      }



       // axios.post('http://localhost:3000/admin', this.state)
       
       
    

      


  
  

  
      
    render(){

    
      return(<div key = "123">

              <div className = "Suche">
                <form className = "Form" onSubmit={this.handleSubmit}  >
              
                  <div className="Textfield">
                  <label>
                  <input className ="InputText" placeholder ="Suchbegriff" name ="value" type="text" value={this.state.value} onChange={this.handleChange}/>
                  
                  </label>
                  </div>
                  <br/> 
                  <div className="Submit">
                 
                  <input className="ButtonSubmit" type="submit" value=" Film Suchen" /> 
                   
                  </div>
                </form>
                  
                


                </div>

                <div >
                    

                      
                         
                         {/* (this.state.FehlerAusgabe) ? null: ( */ } 
                        { this.state.visible ? ( <div>


                                 


                          
     <h1 className = "text-center"> Ergebnisse </h1>


           
      <div className = "ErgebnisBox">
      <br/>
     <div className ="MaxHeight">{
       
       

       
     this.state.filme.map(



      
       
          filme => ( 
          
          <div key = {filme.id}> <div className ="ErgebnisDarstellung"><img key ={filme.id} alt= " " className="image" src={filme.image} /></div>
              <div className="Title"> <div onClick={this.clickHandler(filme.title)}>{filme.title}</div>   {filme.description}</div></div>
          )
     )}
     
      </div> </div>
                    
                            
                        

    </div>) : null } 
    {
    this.state.FehlerAusgabe ? (<div className="FehlerMeldung">
      Das hat Leider nicht geklappt, versuchen Sie es bitte erneut
      </div>
      ) : null 
    
    } 
    {
    this.state.Ergebnis0 ? (<div className="FehlerMeldung">
      Das hat Leider nicht geklappt, es wurden keine Ergebnisse gefunden
      </div>
      ) : null 
    
    } 
    
    
    <br/>


                       


                     
                  	
                     
                    
    </div></div>

                
      )


  } 
}
export default FilmSuche ;