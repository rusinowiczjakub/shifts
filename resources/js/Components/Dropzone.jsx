import {useCallback, useEffect, useState} from "react";
import {useDropzone} from "react-dropzone";
import {PaperClip} from "@/Components/Icons/PaperClip";
import {router} from '@inertiajs/react';
const Dropzone = (props) => {
    const files = props.files;
    const [fileInfo, setFileInfo] = useState(null);
    const uploadedFiles = props.uploadedFiles;
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.map((file) => {
            const reader = new FileReader();

            props.onChange(file);
            reader.onload = function (e) {
                setFileInfo(e.target.result)
            };

            reader.readAsDataURL(file);
            return file;
        });
    }, [])

    const deleteExistingFile = (id) => {
        router.delete(route('staff.profile.skill.media.delete', {media: id}), {
            preserveScroll: true,
            onSuccess: () => {
                console.log('deleted');
            }
        })
    }

    const deleteFile = (e) => {
        e.preventDefault();
        props.onChange(null);
    }

    const {getRootProps, isDragActive} = useDropzone({onDrop})

    return (
        <div className={`flex flex-col items-center justify-center w-full ${props.className}`}>
            <label
                {...getRootProps()}
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {!isDragActive ?
                        <>
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                className="font-semibold">Kliknij </span>lub
                                przeciągnij plik</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, PDF</p>
                        </>
                        : <>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                className="font-semibold">Upuść plik ...</span></p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Przeciągnij i upuść plik,
                                lub kliknij żeby wybrać.</p>
                        </>
                    }
                </div>
                {/*<input className="hidden" {...props} {...getInputProps()}/>*/}
            </label>
            {uploadedFiles && uploadedFiles[0] && !files &&
                <div className={'flex flex-col w-full bg-white mt-4'}>
                    <div className={'flex flex-row justify-between'}>
                        <div className={'rounded-md'}>
                            <PaperClip className={'h-6 w-6'}/>
                        </div>
                        <div>
                            {uploadedFiles[0].file_name}
                        </div>
                        <div>
                            <button type={'button'} onClick={(e) => deleteExistingFile(uploadedFiles[0].id)}
                                    className={'text-sm text-red-600 hover:text-red-400'}>Usuń
                            </button>
                        </div>
                    </div>
                </div>
            }
            {files &&
                <div className={'flex flex-col w-full bg-white mt-4'}>
                    <div className={'flex flex-row justify-between'}>
                        <div className={'rounded-md'}>
                            <PaperClip className={'h-6 w-6'}/>
                        </div>
                        <div>
                            {files.name}
                        </div>
                        <div>
                            <button type={'button'} onClick={(e) => deleteFile(e)}
                                    className={'text-sm text-red-600 hover:text-red-400'}>Usuń
                            </button>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Dropzone;
