import { useHistory } from "react-router";
import Coloumn from "../UI/Coloumn";
import Row from "../UI/Row";
import Table from "../UI/Table";
import actions from "../../store/actions"
import { connect } from "react-redux";
import { useEffect } from "react";

const MyWorkTable=props=>{
    useEffect(()=>{
        props.setMyWork();
    },[])
    const history=useHistory()
    return(
        <Table>
                    <thead>
                        <Row>
                            <th>customer</th>
                            
                            <th>address</th>
                            <th>time</th>
                            <th>status</th>
                        </Row>
                    </thead>
                    {props.myWorks?<tbody>
                        {props.myWorks.map((myWork,index)=>{
                            return(
                            
                            <Row click={()=>history.push("my-work/"+index)} key={myWork.customer}>
                                
                                <Coloumn>{myWork.customer}</Coloumn>
                                <Coloumn>{myWork.address}</Coloumn>
                                <Coloumn>{myWork.time}</Coloumn>
                                <Coloumn>{myWork.status}</Coloumn>
                                        
                                    </Row>)
                        })}
                    </tbody>:
                    <tfoot>
                    <Row>
                        <td className="text-danger text-center" colSpan="4">Data is Not Found</td>
                    </Row>
                </tfoot>}
                </Table>
    )
}

const mapStateToProps=state=>{
    return{
        myWorks:state.myWork.data
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        setMyWork:()=>dispatch(actions.myWork.set())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyWorkTable);