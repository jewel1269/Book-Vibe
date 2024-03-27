import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import useData from '../Hook/useData';
import { useParams } from 'react-router-dom';
import { getFromLocalStorage } from '../Utility/localStorage';
import '../Chartccs/Chart.css'

// Custom shape for the bar chart (Triangle)
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink']; 

const CustomBarChart = () => {
    const [item, setItem] = useState({});
    const [chartWidth, setChartWidth] = useState(1500);
    const [chartHeight, setChartHeight] = useState(600);
    
    const { books } = useData();
    const { id } = useParams();

    useEffect(() => {
        // Adjust chart dimensions based on screen size
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            if (screenWidth < 600) {
                setChartWidth(screenWidth * 0.9);
                setChartHeight(screenHeight * 0.5);
            } else {
                setChartWidth(1500);
                setChartHeight(600);
            }
        };

        handleResize(); // Call once to set initial dimensions

        window.addEventListener('resize', handleResize); // Add event listener for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on unmount
        };
    }, []);

    useEffect(() => {
        if (books) {
            const dataFromLocalStorage = getFromLocalStorage(id);
            if (dataFromLocalStorage) {
                setItem(dataFromLocalStorage);
            }
        }
    }, [books, id]);

    const data = item
        ? [{ bookName: item.bookName, totalPages: item.totalPages }]
        : [];

    return (
        <BarChart className='lg:ml-56 lg:border-2 lg:rounded-2xl lg:shadow-2xl lg:w-full lg:bg-slate-100 lg:mt-32'
            width={chartWidth}
            height={chartHeight}
            data={item}
            
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Bar>
        </BarChart>
    );
};

export default CustomBarChart;



























