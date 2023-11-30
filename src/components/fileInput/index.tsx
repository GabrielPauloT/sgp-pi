import { useCallback, useState } from "react"
import { DropzoneState, useDropzone } from "react-dropzone";
import { UploadIcon } from "../Icons/UploadIcon";
import { FileIcon } from "../Icons/FileIcon";
import { CloseIcon } from '../Icons/CloseIcon';
import { Icons } from "../Icons";

interface InputProps {
    dropzone: DropzoneState;
}

interface HasFileProps {
    file?: File;
    removeFile: () => void
}

export const FileInput = () => {
    const [file, setFile] = useState<File | null>(null);

    const removeFile = useCallback(() => {
        setFile(null);
    }, [file]);

    const onDrop = useCallback( (files: File[]) => {
        setFile(files[0]);
    }, []);

    const dropzone = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.svg']
        }, 
    });

    if (file) return <HasFile file={file} removeFile={removeFile} />;

    return < Input dropzone={dropzone} />;
};

const Input = ({dropzone}: InputProps) => {
    const {getRootProps, getInputProps, isDragActive} = dropzone

    return(
        <div 
        {...getRootProps()}
        className={`w-1/2 h-full rounded-lg border-dashed border-4 hover:border-gray-500 bg-gray-700 houver:bg-gray-600 transition-all
        ${isDragActive ? 'border-blue-500' : 'border-gray-600'}`}>
        <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
            <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
            <Icons name="BsUpload" />
                {isDragActive ? (
                    <p className="font-bold text-lg text-blue-400">Solte para adicionar</p>
                    ) : (
                        <>
                <p className="mb-2 text-lg text-gray-400"> 
                    <span className="font-bold">Clique para enviar</span> ou arraste até aqui
                </p>
                <p className="text-gray-400 text-sm">PDF</p>
                </>                    
                )}

            </div>
        </label>
        <input {...getInputProps()} className="hidden" />
        </div>
    )
}

const HasFile = ({ file, removeFile } : HasFileProps) =>{
    return(
        <div className="w-1/2 h-full rounded-lg border-dashed border-4 border-gray-600 bg-gray-700 flex justify-center intems-center">
            <div className="bg-white w-36 rounded-md shadow-md flex gap-3 items-center justify-center">
                <Icons name="BsFile" />
                <span className="text-sm text-gray-500 my-4">{file?.name}</span>
                <button type="button" onClick={removeFile} className="place-self-start mt-1 p-1">
                <Icons name="MdClosedCaption" />
                </button>
            </div>
        </div>
    )
}