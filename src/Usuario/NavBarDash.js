import { Dropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import { Link } from "react-router-dom";

const NavBarDash = () => {
    return (
        <>
            <div className="w-25">
                <div className="card bg-light h-100" style={{ borderRadius: "1rem" }}>
                    <SidebarMenu
                        defaultExpanded={true}
                        collapseOnSelect={false}
                        expand="lg"
                        hide="lg"
                    >
                        <SidebarMenu.Collapse>

                            <SidebarMenu.Body>
                                <SidebarMenu.Nav>
                                    
                                    <SidebarMenu.Sub defaultExpanded={true} eventKey={1}>
                                        <SidebarMenu.Sub.Toggle>
                                            <SidebarMenu.Nav.Icon />
                                            <SidebarMenu.Nav.Title>Rifas</SidebarMenu.Nav.Title>
                                        </SidebarMenu.Sub.Toggle>
                                        <SidebarMenu.Sub.Collapse>
                                            <SidebarMenu.Nav>
                                                <SidebarMenu.Nav.Link href={"/misrifas"}>
                                                    <SidebarMenu.Nav.Title>Mis Rifas</SidebarMenu.Nav.Title>
                                                </SidebarMenu.Nav.Link>
                                                <SidebarMenu.Nav.Link href={"/rifasquejuego"}>
                                                    <SidebarMenu.Nav.Title>Rifas en las que Participo</SidebarMenu.Nav.Title>
                                                </SidebarMenu.Nav.Link>
                                                <SidebarMenu.Nav.Link href={"/nueva"}>
                                                    <SidebarMenu.Nav.Title>Crear Rifas</SidebarMenu.Nav.Title>
                                                </SidebarMenu.Nav.Link>
                                                <SidebarMenu.Nav.Link href={"/anotarme"}>
                                                    <SidebarMenu.Nav.Title>Anotarme en una rifa</SidebarMenu.Nav.Title>
                                                </SidebarMenu.Nav.Link>
                                            </SidebarMenu.Nav>
                                        </SidebarMenu.Sub.Collapse>
                                    </SidebarMenu.Sub>
                                    <SidebarMenu.Sub defaultExpanded={true} eventKey={1}>
                                        <SidebarMenu.Sub.Toggle>
                                            <SidebarMenu.Nav.Icon />
                                            <SidebarMenu.Nav.Title>Perfil</SidebarMenu.Nav.Title>
                                        </SidebarMenu.Sub.Toggle>
                                        <SidebarMenu.Sub.Collapse>
                                            <SidebarMenu.Nav>
                                                <SidebarMenu.Nav.Link>
                                                    <SidebarMenu.Nav.Title>Ver mi Perfil</SidebarMenu.Nav.Title>
                                                </SidebarMenu.Nav.Link>
                                                <SidebarMenu.Nav.Link>
                                                    <SidebarMenu.Nav.Title>Cerrar sesión</SidebarMenu.Nav.Title>
                                                </SidebarMenu.Nav.Link>
                                                
                                            </SidebarMenu.Nav>
                                        </SidebarMenu.Sub.Collapse>
                                    </SidebarMenu.Sub>
                                </SidebarMenu.Nav>
                            </SidebarMenu.Body>
                            <SidebarMenu.Footer>
                            </SidebarMenu.Footer>
                        </SidebarMenu.Collapse>
                    </SidebarMenu>
                </div>
            </div>
        </>
    )
}

export default NavBarDash;