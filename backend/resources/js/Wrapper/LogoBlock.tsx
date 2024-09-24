import Typography from "@material-tailwind/react/components/Typography";

interface LogoBlockProps {
    srcFile: string;
    alt?: string;
    classnames?: string;
}

export function LogoBlock({ srcFile, alt, classnames }: LogoBlockProps) {
    
    return (
        <Typography
            as="a"
            href="/"
            className="flex items-center cursor-pointer hover:text-blue-500 font-medium text-blue-gray-900"
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}
            placeholder={""}
        >
            <img
                src={srcFile}
                alt={alt ?? "logo"}
                className={classnames ?? "lg:h-14 h-12 rounded-full"}
            />
            <div className="hidden lg:block ml-2 w-32 text-lg">Asafarim</div>
        </Typography>
    );
}