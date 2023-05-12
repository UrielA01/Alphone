import React from "react";

const parsePhoneList = ((list) =>
    list.map((number) => (
        <span>{number} </span>
    ))
)

function Contact({teamName, system, numbers}) {
    return (
        <tr>
          <td>{teamName}</td>
          <td>{system}</td>
            <td>{parsePhoneList(numbers)}</td>
            <td></td>
        </tr>
    );
}

export default Contact;