import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img width='400' src='https://naked-science.ru/wp-content/uploads/2018/04/field_image_istock-516189065.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
              description
            </div>
        </div>
    );
}
export default ProfileInfo;