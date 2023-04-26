import StripeCheckout from "react-stripe-checkout";

const KEY = "pk_test_51MydEYSHb0RMRFV6EYRUSeAekxcEWGodq9KWYtxTIrTS3jZelxwwGsRwltsRm1mpArseaD53VYdiGfcSPfaww0kz00POfRxIp5"
const Pay = () => {

    const [stripeToken, setStripeToken]= useState(null);
    const history = useHistory()


    const onToken = (token)=> {
        setStripeToken(token);
    };

    useEffect(()=>{
        const makeRequest = async () =>{
            try{
             const res = await axios.post(
                "http://localhost:5000/api/checkout/payment", {
                 tokenId: stripeToken.id,
                 amount: 2000,

                }
             
             );
             console.log(res.data);
             history.push("/success" )
            }catch(err){
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, history]);
    return(
        <div 
        style={{
            height:"100vh",
            display:"flex",
            alignContent:"center",
            justifyContent: "center",
        }}
        >   
            {stripeToken ? (<span>Processing. Please Wait.... </span>): (

            
            <StripeCheckout 
            name= "RizzBoom" 
            image="https://avatars.githubusercontent.com/u/1486366>v=4"
            billingAddress
            shippingAddress
            description= " Your Total is Rs.1599 "
            amount={2000}
            token={onToken}
            stripeKey={KEY}
            >
            <button
                style={{
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "block",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",

                }}
            >
                Pay Now
            </button>
            </StripeCheckout>
        )};    
        </div>
        
    );
};

export default Pay;