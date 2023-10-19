import Card from "./Card";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { IoCloudDoneOutline } from "react-icons/io5";

export default function Cards() {
    const cloudUpload = <HiOutlineCloudUpload />;
    const cloudDone = <IoCloudDoneOutline />;

    return (
        <section id="cards">
            <h1 className="title cards-title">CARDS</h1>

            <div className="cards-container">
                <Card icon={cloudUpload} isHoverable={false} badgeColor='blue'>
                    <h3 className="card-header">Easy Deployment</h3>
                    <p className="card-body">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </Card>

                <Card icon={cloudDone} isHoverable={true} badgeColor='green'>
                    <h3 className="card-header">Deployment completed</h3>
                    <p className="card-body">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </Card>
            </div>
        </section>
    )
}