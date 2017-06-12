var React=require('react');
var {Link}=require('react-router')

var Examples=()=>{
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out</p>
            <ol>
                <li>
                    <link to="/?location=Kathmandu">Kathmandu, Nepal</link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports=Examples;