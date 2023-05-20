import React from "react";
import TicketDetail from "../component/TicketDetail";
import TicketComment from "../component/TicketComment";
import styled from "styled-components";

const All = styled.div`
position: relative;
width: 1000px;
margin: 0px auto;
`

const Allin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 0px 40px;
`

export default function DetailTicketPage() {
    
    return (
        <div>
            <All>
                <Allin>
                    <TicketDetail />
                    <TicketComment />
                </Allin>
            </All>

        </div>
    )
}