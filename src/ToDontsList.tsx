import React from 'react';

function ToDontsList(props: any) {
    console.log(props)
    const list = props.toDonts.map((toDont: any) => {
        return (
            <li key={toDont.title}>
                <p>
                    <span>
                        <strong>
                            {toDont.title}:
                        </strong>
                    </span>
                    {toDont.description}
                </p>
            </li>
        )
    })
    return (
        <ul>
            {list}
        </ul>
    )
}

export default ToDontsList