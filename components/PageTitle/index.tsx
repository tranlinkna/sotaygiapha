type propsType = {
    familyName: string;
    generations: number;
    menNumber: number;
};

const PageTitle = ({familyName, generations, menNumber}: propsType) => {
    return (
        <h1 className='page-title'>
            Dòng họ {familyName}<br/>
            Đến hiện tại có {generations} đời - {menNumber} đinh
        </h1>
    );
  };
  
  export default PageTitle;