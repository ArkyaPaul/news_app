import React,{useState,useEffect} from "react";
import axios from 'axios';
export default function SerachBar(){
     const [info,setInfo]=useState([]);
     const [title,setTitle]=useState('');
     const [fromDate,setFromDate]=useState('');
     const [toDate,setToDate]=useState('');
     const [language,setLanguage]=useState('');
     const [sortBy,setSortBy]=useState('');
     const [page, setPage] = useState();
     const [flag,setFlag]=useState(false);
     const [country,setConuntry]=useState('');
     const [category,setCategory]=useState('');
     const [temp,setTemp]=useState(true);
    
     useEffect(()=>{
        if (temp){
            if(title||fromDate||toDate||language||sortBy){
                axios.get(`https://newsapi.org/v2/everything?q=${title}&from=${fromDate}&to=${toDate}&sortBy=${sortBy}&language=${language}&apiKey=b80c929181534c67a2f0c3685e7f03ff`)
                .then((res)=>{setInfo(res.data.articles)})
                .catch((err)=>{console.log(err)})
                }
        }else{
            if(country||category){
                axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b80c929181534c67a2f0c3685e7f03ff`)
                .then((res)=>{setInfo(res.data.articles)})
                .catch((err)=>{console.log(err)})
                }
        }
        
    },[title,fromDate,toDate,language,sortBy,country,category]);
    
    const insertVal=()=>{
        setTitle(document.getElementById('tp').value);
        setFromDate(document.getElementById('fdt').value);
        setToDate(document.getElementById('tdt').value);
        setLanguage(document.getElementById('lang').value);
        setSortBy(document.getElementById('sb').value);
        setPage(1);
        setFlag(false);
        setTemp(true); 
    }

    const selectedPage=(e)=>{
        setPage(e);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
          });
    }
    
    const getHeadlines=()=>{
        setFlag(true);
        setTemp(false);
    }

    const newSearch=()=>{
        setConuntry(document.getElementById('coun').value);
        setCategory(document.getElementById('cate').value);
        setPage(1);
        setFlag(false);
        resetSearch();      
    }

    const resetSearch=()=>{
        document.getElementById('tp').value='';
        document.getElementById('fdt').value='';
        document.getElementById('tdt').value='';
        document.getElementById('lang').value='';
        document.getElementById('sb').value='';
    }

    return(

        <div className="container">

            <div style={{background:'white',textAlign:'center',height:'35px'}}>
                
                Topic:
                <input type="text" style={{marginRight:'12px'}} id="tp"/>
                
                From=
                 <input type="date" style={{marginRight:'12px'}} id="fdt"/> 
               
                To=
                <input type="date" style={{marginRight:'12px'}} id="tdt"/>
                
                Language:
                <select name="language" id="lang" style={{marginRight:'12px'}}>
                    <option value="" disabled selected>Select Language</option>
                    <option value="ar">Arabic</option>
                    <option value="de">German</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="he">Hebrew</option>
                    <option value="it">Italian</option>
                    <option value="nl">Dutch</option>
                    <option value="no">Norwegian</option>
                    <option value="pt">Portuguese</option>
                    <option value="ru">Russian</option>
                    <option value="sv">Swedish</option>
                    <option value="zh">Chinese</option>
                </select>
               
                Sort By:
                <select id="sb" name="sortBy" style={{marginRight:'12px'}}>
                    <option value=""disabled selected>Sorting order</option>
                    <option value="relevancy">Relevancy</option>
                    <option value="popularity">Popularity</option>
                    <option value="publishedAt">Published At</option>
                </select>

                <button onClick={insertVal} style={{marginLeft:'25px'}}>Search</button>

                <button onClick={resetSearch} style={{marginLeft:'25px'}}>Reset</button>

            </div>
           
            <div style={{background:'white',textAlign:'center'}}>
                    <div>
                        
                    </div>
                    <button style={{color:'yellow',background:'red',borderRadius:'10px'}} onClick={getHeadlines}>Top Headlines</button>
                       
                        {flag && <div>
                                Country:
                                <select name="country" id="coun" style={{marginRight:'32px'}}>
                                    <option value="" disabled selected>Select Country</option>  
                                    <option value="ar">Argentina</option>
                                    <option value="au">Australia</option>
                                    <option value="at">Austria</option>                                
                                    <option value="be">Belgium</option>
                                    <option value="br">Brazil</option>
                                    <option value="bg">Bulgaria</option>
                                    <option value="ca">Canada</option>
                                    <option value="cn">China</option>
                                    <option value="co">Columbia</option>
                                    <option value="cu">Cuba</option>
                                    <option value="cz">Czechia</option>
                                    <option value="eg">Egypt</option>
                                    <option value="fr">France</option>
                                    <option value="de">Germany</option>
                                    <option value="gr">Greece</option>
                                    <option value="hk">Hong Kong</option>
                                    <option value="hu">Hungary</option>
                                    <option value="in">India</option>
                                    <option value="id">Indonesia</option>
                                    <option value="ie">Ireland</option>
                                    <option value="il">Israel</option>
                                    <option value="it">Italy</option>
                                    <option value="jp">Japan</option>
                                    <option value="lv">Latvia</option>
                                    <option value="lt">Lithuania</option>
                                    <option value="my">Malaysia</option>
                                    <option value="mx">Mexico</option>
                                    <option value="ma">Morocco</option>
                                    <option value="nl">Netherlands</option>
                                    <option value="nz">New Zealand</option>
                                    <option value="ng">Nigeria</option>
                                    <option value="no">Norway</option>
                                    <option value="ph">Philippines</option>
                                    <option value="pl">Poland</option>
                                    <option value="pt">Portugal</option>
                                    <option value="ro">Romania</option>   
                                    <option value="ru">Russia</option>
                                    <option value="sa">Saudi Arabia</option>
                                    <option value="rs">Serbia</option>
                                    <option value="sg">Singapore</option>
                                    <option value="sk">Slovakia</option>
                                    <option value="si">Slovenia</option>
                                    <option value="kr">South Korea</option>
                                    <option value="se">Sweden</option>
                                    <option value="ch">Switzerland</option>
                                    <option value="za">South Africa</option>
                                    <option value="tw">Taiwan</option>
                                    <option value="th">Thailand</option>
                                    <option value="tr">Turkiye</option>
                                    <option value="ua">Ukraine</option>
                                    <option value="ae">United Arab Emirates</option>
                                    <option value="gb">United Kingdom</option>
                                    <option value="us">United States of America</option>
                                    <option value="ve">Venezuela</option>  
                                </select>

                                Category:
                                <select id="cate" name="category" style={{marginRight:'32px'}}>
                                    <option value=""disabled selected>Select Category</option>
                                    <option value="business">Business</option>
                                    <option value="entertainment">Entertainment</option>
                                    <option value="general">General</option>
                                    <option value="health">Health</option>
                                    <option value="science">Science</option>
                                    <option value="sports">Sports</option>
                                    <option value="technology">Tech</option>
                                </select>

                                <button onClick={newSearch}>Ok</button>
                            </div>}
            </div><br />

            <div style={{textAlign:'center',background:'white'}}>
               {
                 info.slice(page*5-5,page*5).map((val,idx)=>(
                    val.description!=null && val.author!=null && <div key={idx}>
                        <img src={val.urlToImage} alt="" width='60%'/>
                        <h4>{val.source.name}: {val.title}</h4>
                        <a href={val.url} rel="noopener" target="_blank">{val.description.slice(0,80)}...</a>
                        <br /><br />
                    </div>))
                }
            </div>

            <div style={{textAlign:'center'}}>
                {page>1 && <button onClick={()=>selectedPage(page-1)} style={{marginRight:'10px'}}>prev</button>}

                {page}

                {page<info.length/5 && <button onClick={()=>selectedPage(page+1)} style={{marginLeft:'10px'}}>next</button>}
            </div>
            
        </div>
    )
}