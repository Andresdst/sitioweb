import React, {Fragment} from "react"

export default (props) => (
<Fragment>
<h2 className="text-3xl font-bold text-center">{props.title}</h2>
    <div className="flex mt-4">
        {
            props.data.map(ele=>(
                <props.card element={ele}></props.card>
            ))
        }
    </div>
</Fragment>
)


