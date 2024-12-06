
import React, {useState} from 'react'
import styles from "./Page.module.css"

const Page = () => {
    const [Task, setTask] = useState("")
    const [Desc, setDesc] = useState("")
    const [mainTask, setmainTask] = useState([])

    const SubmitHandler = (e) => {
        e.preventDefault();
        setmainTask([...mainTask, {Task, Desc}])
        setTask("");
        setDesc("");
    }

    const deleteHandler = (i) => {
        let copyTask = [...mainTask]
        copyTask.splice(i, 1)
        setmainTask(copyTask)
    }

    // TASK DISPLAY
    let renderTask = <p className={styles.noTaskDisplay}>No task</p>

    if (mainTask.length > 0) {
        renderTask = mainTask.map(function(t, i) {
            return (
                <li key={i} className={styles.taskList}>
                    <div className={styles.taskDiv}>
                        <h5 className={styles.TaskHead}> {t.Task} </h5>
                        <p className={styles.TaskDesc}> {t.Desc} </p>
                    </div>

                    <button onClick={()=>{
                        deleteHandler(i)
                    }}
                    className={styles.deleteButton}>Delete
                    </button>
                </li>
            )
        })
    }
    return (
        <div className={styles.Wrapper}>
            <header className={styles.Title}>
                <h1>Fenopix Dashboard</h1>
            </header>

            <form onSubmit={SubmitHandler} className={styles.Form}>
                <input type="text" placeholder='Enter task' className={styles.taskInput} 
                value={Task} 
                onChange={(e)=>{
                    setTask(e.target.value)
                }} />

                <input type="text" placeholder='Enter description' className={styles.descInput} 
                value={Desc}
                onChange={(e)=>{
                    setDesc(e.target.value)
                }} />

                <button type="submit" className={styles.addTaskButton}>Add Task</button>
            </form>

            <div className={styles.taskDisplay}>
                <ul>{renderTask}</ul>
            </div>
        </div>
    )
}

export default Page