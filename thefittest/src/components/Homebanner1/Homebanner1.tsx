import React from 'react';
import { CircularProgress } from '@mui/joy';
import { AiOutlineEye } from 'react-icons/ai';
import './Homebanner1.css';

function Homebanner1() {
    const [data, setData] = React.useState<any>(null);

    const getData = async () => {
        let temp = [
            {
                "name": "Calories Intake",
                "value": 2000,
                "unit": "kcal",
                "goal": 2500,
                "goalunit": "kcal"
            },
            {
                "name": "Sleep",
                "value": 8,
                "unit": "hrs",
                "goal": 8,
                "goalunit": "hrs"
            },
            {
                "name": "Water",
                "value": 2000,
                "unit": "ml",
                "goal": 3000,
                "goalunit": "ml"
            },
            {
                "name": "Workout",
                "value": 2,
                "unit": "days",
                "goal": 6,
                "goalunit": "days"
            },
            {
                "name": "Steps",
                "value": 7000,
                "unit": "steps",
                "goal": 10000,
                "goalunit": "steps"
            },
            {
                "name": "Weight",
                "value": 65,
                "unit": "kg",
                "goal": 70,
                "goalunit": "kg"
            }
        ];
        setData(temp);
        console.log(temp);
    };

    React.useEffect(() => {
        getData();
    }, []);

    function simplifyFraction(numerator: number, denominator: number): [number, number] {
        function gcd(a: number, b: number): number {
            return b === 0 ? a : gcd(b, a % b);
        }

        const divisor = gcd(numerator, denominator);
        return [numerator / divisor, denominator / divisor];
    }

    return (
        <div className="meters">
           <h1 className="progress-title">Your Progress</h1>
            {data?.length > 0 &&
                data.map((item: any, index: number) => {
                    const progress = (item.value / item.goal) * 100;
                    const isCompleted = progress >= 100;

                    return (
                        <div className="card" key={index}>
                            <div className="card-header">
                                <div className="card-header-box">
                                    <div className="card-header-box-name">{item.name}</div>
                                    <div className="card-header-box-value">
                                        {item.value} {item.unit}
                                    </div>
                                </div>
                                <div className="card-header-box">
                                    <div className="card-header-box-name">Target</div>
                                    <div className="card-header-box-value">
                                        {item.goal} {item.goalunit}
                                    </div>
                                </div>
                            </div>
                            <CircularProgress
                                determinate
                                variant="outlined"
                                size="lg"
                                value={progress}
                                color={isCompleted ? "neutral" : "primary"} // Black if completed, White if not
                            >
                                <span className='textincircle'>
                                    {simplifyFraction(item.value, item.goal)[0] +
                                        '/' +
                                        simplifyFraction(item.value, item.goal)[1]}
                                </span>
                            </CircularProgress>
                            <button>
                                Show Report <AiOutlineEye />
                            </button>
                        </div>
                    );
                })}
        </div>
    );
}

export default Homebanner1;
