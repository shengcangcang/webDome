
import './index.css';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';


interface AreaChartProps {
    data: any;
    color: string;
    searchText: string;
    className?: string
}



const changeStrongText = (str: string, strongText: string) => {

    //  document.getElementById('AreaTitle')?.innerHTML()
    return str.replace(
        new RegExp(`(${strongText})`, 'ig'),
        `<span style='font-weight: 600;'>${strongText}</span>`
    )
}

const getXLaber = (start:string,end:string) =>{

const monthData = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
 const startData = start.split('-')
 const endData = end.split('-')


 return `${monthData[Number(startData[1])-1]} ${startData[0]} - ${monthData[Number(endData[1])-1]} ${endData[0]}`

}


function AreaChartMin(props: AreaChartProps) {

    const { data, color, searchText } = props

    const { name, search_msv, dataAvg, endData, startData } = data
    return (

        <div className='AreaChart-container'>
            <p className='AreaChart-title' dangerouslySetInnerHTML={{ __html: changeStrongText(name, searchText) }}></p>
            <p className='AreaChart-title-sub'>{`Growth ${Math.round(dataAvg * 100)}%`}</p>
            <div className='AreaChart-container-Area'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={search_msv}
                        margin={{
                            // top: 10,
                        }}
                    >
                        <Area type='monotone' dataKey="av" stroke={color} fill={color} fillOpacity={0.4} />
                        <Area type="monotone" dataKey="sv" stroke={color} fill={color} fillOpacity={1} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className='AreaChart-xlaber'>
                {getXLaber(startData.date,endData.date)}
            </div>
        </div>

    );
}




export default AreaChartMin;
