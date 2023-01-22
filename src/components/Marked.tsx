import React, {FC} from 'react';

const Marked: FC<{ filter: string, str: string }> = ({filter, str}) => {
    if (!filter) return <span>{str}</span>

    const regexp = new RegExp(filter, 'ig')
    const matchValue = str.match(regexp)

    return <span>{
        matchValue
            ? str.split(regexp).map((item, index, arr) => {
                if (index < arr.length - 1) {
                    const match = matchValue.shift()
                    return <span key={index}>{item}
                        <mark>{match}</mark>
                    </span>
                }
                return item
            })
            : str
    }
    </span>
};

export default Marked;