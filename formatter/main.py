import os
import shutil
import eel

# Initialize the "web" folder for UI assets
# Modern UI will be served from formatter/web

eel.init('web')

@eel.expose
def format_folder(path: str) -> str:
    """Delete all files and folders inside the given path."""
    if not os.path.isdir(path):
        return "Path not found"
    try:
        for name in os.listdir(path):
            file_path = os.path.join(path, name)
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        return "Folder formatted"
    except Exception as exc:
        return f"Error: {exc}"


if __name__ == "__main__":
    # Start without automatically opening a browser for compatibility
    eel.start('index.html', size=(600, 400), mode=None)
