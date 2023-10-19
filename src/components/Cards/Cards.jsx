import Card from "./Card";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { IoCloudDoneOutline } from "react-icons/io5";

export default function Cards() {
    const cloudUpload = <HiOutlineCloudUpload />;
    const cloudDone = <IoCloudDoneOutline />;

    return (
        <section id="cards" className="cards-container">
            <h1 className="title cards-title">CARDS</h1>

            <div className="card-container">
                <Card icon={cloudUpload} isHoverable={false} badgeColor='blue'>
                    <h3 className="card-header">Easy Deployment</h3>
                    <p className="card-body">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </Card>
            </div>

            <div className="card-container hover">
                <Card icon={cloudDone} isHoverable={true} badgeColor='green'>
                    <h3 className="card-header">Deployment completed</h3>
                    <p className="card-body">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </Card>
            </div>
        </section>
    )
}